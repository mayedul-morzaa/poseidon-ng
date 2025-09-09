import {Component, computed, effect, inject, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Chart as ChartJS, registerables} from 'chart.js';
import {MatrixController, MatrixElement} from 'chartjs-chart-matrix';
import {LayoutService} from '@/layout/service/layout.service';
import 'chartjs-adapter-date-fns';

ChartJS.register(...registerables, MatrixController, MatrixElement);

@Component({
    selector: 'heat-map-chart',
    standalone: true,
    imports: [CommonModule],
    template: `
        <canvas id="heatmap" class="h-full w-full max-w-full min-h-80"></canvas>`,
    host: {
        class: 'flex h-full w-full cursor-pointer max-w-full min-h-80',
    }
})
export class HeatMapChart {
    layoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.layoutService.isDarkTheme());

    primaryColor = computed(() => this.layoutService.layoutConfig().primary);

    surfaceColor = computed(() => this.layoutService.layoutConfig().surface);

    label = input<string>('Label');

    dataset = input<any[]>();

    conditions = input.required<any[]>();

    chart!: ChartJS;

    chartData: any;

    chartPlugins: any;

    chartOptions: any;

    constructor() {
        effect(() => {
            this.isDarkTheme();
            this.primaryColor();
            this.surfaceColor();
            this.dataset();
            this.drawChart();
        });
    }

    createChart() {
        const ctx = (document.getElementById('heatmap') as HTMLCanvasElement).getContext('2d');
        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = new ChartJS(ctx!, {
            type: 'matrix',
            data: this.chartData,
            options: this.chartOptions,
            plugins: this.chartPlugins
        });
    }

    drawChart() {
        setTimeout(() => {
            this.chartData = this.setChartData();
            this.chartPlugins = this.setChartPlugins();
            this.chartOptions = this.setChartOptions();
            this.createChart();
        }, 100)
    }

    setChartPlugins() {
        return [];
    }

    chartBackgroundColor(c: any) {
        const rootStyles = getComputedStyle(document.documentElement);
        const value = c.dataset.data[c.dataIndex].v;

        const conditions = this.conditions();

        let backgroundColor = '--p-surface-800';

        for (const condition of conditions) {
            if (value >= condition.min && value <= condition.max) {
                backgroundColor = condition.color[this.isDarkTheme() ? 'dark' : 'light'];
                break;
            }
        }
        return rootStyles.getPropertyValue(backgroundColor);
    }

    setChartData() {
        return {
            datasets: [
                {
                    label: this.label() ?? 'dataset',
                    data: this.dataset(),
                    backgroundColor: this.chartBackgroundColor.bind(this),
                    hoverBackgroundColor: undefined,
                    hoverBorderColor: undefined,
                    borderRadius: 4,
                    borderWidth: 0,
                    width(c: any) {
                        const a = c.chart.chartArea || {};
                        return (a.right - a.left) / 14 - 1;
                    },
                    height(c: any) {
                        const a = c.chart.chartArea || {};
                        return (a.bottom - a.top) / 9 - 1;
                    }
                }
            ]
        };
    }

    setChartOptions() {
        const rootStyles = getComputedStyle(document.documentElement);
        const surface400 = rootStyles.getPropertyValue('--p-surface-400');

        return {
            animation: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: 0
            },
            events: [],
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    type: 'time',
                    offset: true,
                    time: {
                        unit: 'week',
                        round: 'week',
                        isoWeekDay: 1,
                        displayFormats: {
                            week: 'MMM dd'
                        }
                    },
                    ticks: {
                        maxRotation: 0,
                        autoSkip: true,
                        font: {
                            size: 12
                        },
                        color: this.isDarkTheme() ? 'rgba(255,255,255,0.64)' : surface400
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                        tickLength: 0
                    },
                    border: {
                        display: false
                    }
                },
                y: {
                    type: 'time',
                    offset: true,
                    time: {
                        unit: 'day',
                        round: 'day',
                        isoWeek: 1,
                        parser: 'i',
                        displayFormats: {
                            day: 'iii'
                        }
                    },
                    reverse: true,
                    position: 'right',
                    ticks: {
                        maxRotation: 0,
                        autoSkip: true,
                        padding: 1,
                        font: {
                            size: 12,
                            weight: 500
                        },
                        color: this.isDarkTheme() ? 'rgba(255,255,255,0.64)' : surface400
                    },
                    border: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                        tickLength: 0
                    }
                }
            }
        };
    }
}

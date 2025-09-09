import {provideHttpClient, withFetch} from '@angular/common/http';
import {ApplicationConfig} from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling} from '@angular/router';
import Aura from '@primeuix/themes/aura';
import {providePrimeNG} from 'primeng/config';
import {appRoutes} from './app.routes';
import {definePreset} from '@primeuix/themes';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },
        overlay: {
            modal: {
                borderRadius: '1.5rem'
            },
            popover: {
                borderRadius: '10px'
            }
        },
        colorScheme: {
            light: {
                surface: {
                    0: 'color-mix(in srgb, {primary.950}, white 100%)',
                    50: 'color-mix(in srgb, {primary.950}, white 95%)',
                    100: 'color-mix(in srgb, {primary.950}, white 90%)',
                    200: 'color-mix(in srgb, {primary.950}, white 80%)',
                    300: 'color-mix(in srgb, {primary.950}, white 70%)',
                    400: 'color-mix(in srgb, {primary.950}, white 60%)',
                    500: 'color-mix(in srgb, {primary.950}, white 50%)',
                    600: 'color-mix(in srgb, {primary.950}, white 40%)',
                    700: 'color-mix(in srgb, {primary.950}, white 30%)',
                    800: 'color-mix(in srgb, {primary.950}, white 20%)',
                    900: 'color-mix(in srgb, {primary.950}, white 10%)',
                    950: 'color-mix(in srgb, {primary.950}, white 5%)'
                }
            },
            dark: {
                surface: {
                    0: 'color-mix(in srgb, var(--surface-ground), white 100%)',
                    50: 'color-mix(in srgb, var(--surface-ground), white 95%)',
                    100: 'color-mix(in srgb, var(--surface-ground), white 90%)',
                    200: 'color-mix(in srgb, var(--surface-ground), white 80%)',
                    300: 'color-mix(in srgb, var(--surface-ground), white 70%)',
                    400: 'color-mix(in srgb, var(--surface-ground), white 60%)',
                    500: 'color-mix(in srgb, var(--surface-ground), white 50%)',
                    600: 'color-mix(in srgb, var(--surface-ground), white 40%)',
                    700: 'color-mix(in srgb, var(--surface-ground), white 30%)',
                    800: 'color-mix(in srgb, var(--surface-ground), white 20%)',
                    900: 'color-mix(in srgb, var(--surface-ground), white 10%)',
                    950: 'color-mix(in srgb, var(--surface-ground), white 5%)'
                }
            }
        }
    }
});

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            appRoutes,
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'top'
            }),
            withEnabledBlockingInitialNavigation()
        ),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        providePrimeNG({theme: {preset: MyPreset, options: {darkModeSelector: '.app-dark'}}})
    ]
};

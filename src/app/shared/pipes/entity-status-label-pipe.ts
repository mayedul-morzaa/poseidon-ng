import { EntityStatusEnum, EntityStatusLabels } from '@/core/enums/entity-status.enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entityStatusLabel'
})
export class EntityStatusLabelPipe implements PipeTransform {

  transform(value: number | EntityStatusEnum): string {
    const label = EntityStatusLabels[value as EntityStatusEnum];
    return label ?? 'Unknown';
  }

}

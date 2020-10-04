import Model, { attr } from '@ember-data/model';

export default class GraphdataModel extends Model {

  @attr('string') text;
  @attr('string') color;
  @attr('string') group;

}

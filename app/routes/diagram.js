import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class DiagramRoute extends Route {

  @service store;

  async model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'graphdata',
        attributes: {
          text: 'Alpha',
          color: 'lightblue',
          group: '0'
        },
        relationships: {}
      }, {
        id: 2,
        type: 'graphdata',
        attributes: {
          text: 'Beta',
          color: 'orange',
          group: '0'
        },
        relationships: {}
      }, {
        id: 3,
        type: 'graphdata',
        attributes: {
          text: 'Gamma',
          color: 'lightgreen',
          group: '5'
        },
        relationships: {}
      }, {
        id: 4,
        type: 'graphdata',
        attributes: {
          text: 'Delta',
          color: 'pink',
          group: '5'
        },
        relationships: {}
      }, {
        id: 5,
        type: 'graphdata',
        attributes: {
          text: 'Epsilon',
          color: 'green',
          group: '0'
        },
        relationships: {}
      }]
    });

    return {
      title: 'science lab',
      owner: 'BlueDolphin',
    };
  }
}

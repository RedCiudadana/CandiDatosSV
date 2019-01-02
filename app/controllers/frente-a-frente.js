import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  availableInfoUno: computed('perfilUno', function() {
    console.log('Calculando 1');
    return this.get('model').info.findBy('id', this.get('perfilUno.id'));
  }),

  availableInfoDos: computed('perfilDos', function() {
    console.log('Calculando 2');
    return this.get('model').info.findBy('id', this.get('perfilDos.id'));
  })
});

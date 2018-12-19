import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({

  spreadsheets: service(),

  model() {
    const spreadsheet = this.get('spreadsheets');
    return hash({
      profiles: this.modelFor('application').presidents,
      info: spreadsheet.fetch('info-president')
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.controllerFor('perfil.frente-a-frente').set('perfilUno', this.modelFor('perfil').profile);
    this.controllerFor('perfil.frente-a-frente').set('perfilDos', this.modelFor('application').presidents.firstObject);
  },
});

import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
    model(params) {
        const party = this.store.peekRecord('partido', params.id);
        let miembros = A(this.modelFor('application')).presidents.filter((data) => {
            return data.partido.content === party;
        });
        return {
          party: party,
          miembros: miembros
        };
    }
});

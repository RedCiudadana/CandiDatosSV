import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        const party = this.store.peekRecord('partido', params.id);
        return party;
    }
});

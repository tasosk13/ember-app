import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        let myOffers = [
            {
                name: 'Φακές Ψιλές',
                location: 'athinas 2',
                capacity: '3000',
                until: '4/11/2015',
                minBid: '3000',
                highBid: '3100',
                status: 'open'
                
            },
            {
                name: 'Φακές Ψιλές',
                location: 'athinas 2',
                capacity: '1000',
                until: '4/11/2015',
                minBid: '1000',
                highBid: '1200',
                status: 'closed'
                
            },
            {
                name: 'Φακές Ψιλές',
                location: 'athinas 2',
                capacity: '2000',
                until: '4/11/2015',
                minBid: '2000',
                highBid: '2100',
                status: 'pending'
                
            }
        ];
        return myOffers;
    }
});
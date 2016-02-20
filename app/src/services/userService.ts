/// <reference path="../_all.ts"/>

module ContactManagerApp {

    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        selectedUser: User;
    }

    export class UserService implements IUserService{
        static $inject = ['$q'];

        constructor(
           private $q : ng.IQService
        ){}

        selectedUser : User = null;

        loadAllUsers() : ng.IPromise<User[]> {
            return this.$q.when(this.users);
        }

        private users: User[] = [
            {
                name: 'Erick Riley',
                avatar: 'svg-1',
                bio: 'blah blah blah...',
                notes: [
                    {
                        title: "pay back dinner",
                        date: new Date('2016-01-12')
                    },
                    {
                        title: 'Buy flowers for birthday',
                        date: new Date('2016-01-19')
                    }
                ]
            },
            {
                name: 'Erick Riley2',
                avatar: 'svg-2',
                bio: 'blah blah blah...',
                notes: [
                    {
                        title: "pay back dinner2",
                        date: new Date('2016-02-12')
                    },
                    {
                        title: 'Buy flowers for birthday2',
                        date: new Date('2016-02-19')
                    }
                ]
            }
        ];
    }
}
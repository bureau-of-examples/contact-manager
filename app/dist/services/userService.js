/// <reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
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
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService.$inject = ['$q'];
        return UserService;
    })();
    ContactManagerApp.UserService = UserService;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map
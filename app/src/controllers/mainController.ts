/// <reference path="../_all.ts" />

module ContactManagerApp {
    export class MainController {

        static $inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia'];

        constructor(
            private userService : IUserService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia
        ){
            var self = this;
            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    self.selected = users[0];
                    console.log(self.users);
                });
        }

        users: User[] = [];
        selected: User = null;
        message: string = 'Hello from our controller';
        searchText: string = '';
        tabIndex: Number = 0;

        toggleSidenav() : void {
            console.log('toggle left sidenav');
            this.$mdSidenav('left').toggle();
        }

        selectUser(user: User) : void {
            this.selected = user;
            var sidenav = this.$mdSidenav('left');
            if(sidenav.isOpen()) {
                sidenav.close();
            }
            this.tabIndex = 0;
        }

        removeNote(note: Note): void {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Notes was removed");

        }

        openToast(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple().textContent(message).position('bottom right').hideDelay(3000)
            );
        }

        clearNotes($event: MouseEvent): void {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all the notes?')
                .textContent('All notes will be deleted, you can\'t undo this action!')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');

            var self = this;
            this.$mdDialog.show(confirm).then(()=>{
                self.selected.notes = [];
                self.openToast('Cleared notes');
            });
        }

        addUser($event: MouseEvent): void {
            var self= this;
            var useFullScreen = this.$mdMedia('sm') || this.$mdMedia('xs');

            this.$mdDialog.show({
                templateUrl: 'dist/views/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: AddUserDialogController,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then(
                (user: User)=>{
                    self.openToast('User added');
                },
                ()=>{
                    console.log('You cancelled the dialog.');
                }
            );

        }
    }
}
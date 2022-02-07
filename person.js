export default class Person {
    choosePerson(number) {
        this.person = number === 1 ? 'Zoe' : 'Tom';
    }
    addHobby() {
        this.service = 'we both have hobby'
    }
    readBook() {
        this.service = this.person + ' is reading book'
    }
    watchTV() {
        this.service = this.person + ' is watching TV'
    }
    extraTime() {
        this.service = 'We are happy'
    }
}
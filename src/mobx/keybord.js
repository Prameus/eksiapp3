import { action, observable, makeObservable } from 'mobx'

class Keyboard {
    constructor() {
        makeObservable(
            this,
            {
                active: observable,
                setActive: action,

                height: observable,
                setHeight: action,

                open: action,
                close: action
            }
        )
    }

    active = false
    setActive = d => this.active = d

    height = 0
    setHeight = d => this.height = d

    open = ({ endCoordinates: { height } }) => {
        this.active = true
        this.height = height
    }

    close = () => {

        this.active = false
        this.height = 0
    }

}

const keyboard = new Keyboard()

export { keyboard }
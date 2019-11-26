abstract class Grandparent {
    abstract makeFood(): string
}

abstract class FakeParent extends Grandparent {
    constructor(private name: string) { super() }
}

class Parent extends FakeParent {
    makeFood() { return '' }
}

class RealGrandparent extends Grandparent {
    makeFood() { return 'good' }
}

const a = new Parent('asdf')
const b = new RealGrandparent()
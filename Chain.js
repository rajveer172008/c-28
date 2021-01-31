class Chain{
constructor(bodyA,bodyB){

var options = {
    bodyA : bodyA,
    bodyB : bodyB,
    stiffness : 0.04,
    length : 10
    

}
this.chain=Constraint.create(options)
World.add(world,this.chain)
}
display(){
    var posA=this.Chain.bodyA.position
    var posB=this.Chain.bodyB.position
    strokeWeight(2)
    line(posA.x,posA.y,posB.x,posB.y)


}

}
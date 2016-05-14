/**
 * MyDroneHelice
 * @constructor
 */
 function MyDroneHelice(scene) {
 	CGFobject.call(this,scene);
	
	this.center = new MySemiSphere(scene, 8, 8); 
	this.spade = new MyCylinder(scene, 8, 1); 
 };

MyDroneHelice.prototype = Object.create(CGFobject.prototype);
MyDroneHelice.prototype.constructor = MyDroneHelice;

MyDroneHelice.prototype.display = function() {
	//Center
	this.scene.pushMatrix();
	this.scene.scale(0.25, 0.30, 0.25);
	this.scene.rotate(-90 * degToRad, 1, 0, 0)
	this.center.display();
	this.scene.popMatrix();

	//spade
    this.scene.pushMatrix();
	this.scene.translate(0, 0.15, 0);
	this.scene.scale(1.5, 0.05, 0.25);
	this.scene.rotate(-90 * degToRad, 1, 0, 0)
	this.spade.display();
	this.scene.popMatrix();
}
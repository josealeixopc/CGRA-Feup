/**
 * MyClock
 * @constructor
 */
 function MyClock(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
    this.cylinder = new MyCylinder(scene, this.slices, this.stacks);
    this.circle = new MyCircle(scene, this.slices, this.stacks);
    this.minPointer = new MyClockHand(scene, 0.6, 0);
    this.horPointer = new MyClockHand(scene, 0.4, 0);
    this.secPointer = new MyClockHand(scene, 0.7, 0);
 	this.initBuffers();

 	this.clockAppearance = new CGFappearance(scene);
	this.clockAppearance.loadTexture("../resources/images/clock.png")
    this.materialDefault = new CGFappearance(scene);

    this.blackAppearance = new CGFappearance(scene);
    this.blackAppearance.setAmbient(0, 0, 0, 1);
    this.blackAppearance.setDiffuse(0, 0, 0, 1);
    this.blackAppearance.setSpecular(0, 0, 0, 1);

    this.redAppearance = new CGFappearance(scene);
    this.redAppearance.setAmbient(0.2, 0, 0, 1);
    this.redAppearance.setDiffuse(0.5, 0, 0, 1);
    this.redAppearance.setSpecular(0.5, 0, 0, 1);

	//Animation related methods
	this.initialTime = 0;	// Initial time in miliseconds
    this.elapsedTime = 0;	// Elapsed time in SECONDS

    //Rate at which the pointers turn
    this.secPointerAngleRate = 1/60 * 360;
    this.minPointerAngleRate = 1/60/60 * 360;
    this.horPointerAngleRate = 1/60/60/24 * 360;

    
 };

MyClock.prototype = Object.create(CGFobject.prototype);
MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {
    this.clockAppearance.apply();
    this.circle.display();
    this.materialDefault.apply();
 	this.cylinder.display();

	this.blackAppearance.apply();

 	this.scene.pushMatrix();
 	this.minPointer.setAngle(180 + this.elapsedTime*this.minPointerAngleRate);
 	this.scene.translate(0, 0, 1);
 	this.minPointer.display();
 	this.scene.popMatrix();

	this.redAppearance.apply();

 	this.scene.pushMatrix();
 	this.secPointer.setAngle(270 + this.elapsedTime*this.secPointerAngleRate);
 	this.scene.translate(0, 0, 1);
 	this.secPointer.display();
 	this.scene.popMatrix();

	this.blackAppearance.apply();

 	this.scene.pushMatrix();
 	this.horPointer.setAngle(90 + this.elapsedTime*this.horPointerAngleRate);
 	this.scene.translate(0, 0, 1);
 	this.horPointer.display();
 	this.scene.popMatrix();
 };

 MyClock.prototype.update = function(currTime){

	if (this.initialTime == 0)
	{
		this.initialTime = currTime;
	}

	else
	{
		this.elapsedTime = Math.floor((currTime - this.initialTime)/1000);
	}
	
 }
 
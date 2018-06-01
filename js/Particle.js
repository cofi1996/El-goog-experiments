var Particle = function(mass) {
	THREE.Vector3.call(this);

	this.mass = mass;
	this.color = new THREE.Color().setHSL(App.biRandom() * 1 + 0.04, 1, 0.4);
	this.velocity = new THREE.Vector3();
};

Particle.prototype = Object.create(THREE.Vector3.prototype);

class Star {
  constructor() {
    // give random coordinates
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    // assign random color
    // this.color = [random(255), random(255), random(255)];
    this.color = [100, 100, 100];

    // when a star flies out of the screen, respawn it
    this.update = function () {
      this.z -= speed;
      if (this.z < 1 || this.z > width) {
        this.respawn();
      }
    };

    this.respawn = function () {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
      this.pz = this.z;
      this.color = [random(255), random(255), random(255)];
    };

    this.show = function () {
      noStroke();
      fill(this.color);

      var sx = map(this.x / this.z, 0, 1, 0, width);
      var sy = map(this.y / this.z, 0, 1, 0, height);

      var r = map(this.z, 0, width, 12, 0);
      ellipse(sx, sy, r, r);

      var px = map(this.x / this.pz, 0, 1, 0, width);
      var py = map(this.y / this.pz, 0, 1, 0, height);
      this.pz = this.z;

      stroke(this.color);
      line(px, py, sx, sy);
    };
  }
}

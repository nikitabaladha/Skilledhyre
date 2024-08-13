// Animation.js
import React, { Component } from "react";

class Animation extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.opts = {
      amount: 6,
      radius: 1,
      thickness: 2,
      rotSpeed: 0.1,
      gravity: 0.8,
    };
    this.particles = [];
  }

  componentDidMount() {
    this.createCanvas();
    this.populate();
    this.loop();
  }

  createCanvas() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    this.ctx = ctx;
  }

  populate() {
    const numDots = this.opts.amount / 2;
    for (let i = 0; i < numDots; i++) {
      this.particles.push(new Dot(this.opts, "#75b8d4"));
      this.particles.push(new Dot(this.opts, "#fe4c1c"));
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.particles.map((D) => {
      D.update();
      D.render(this.ctx);
      return null;
    });
    requestAnimationFrame(() => this.loop());
  }

  render() {
    return (
      <div
        id="particles-50456bd8"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <canvas
          className="particles-js-canvas-el"
          ref={this.canvasRef}
          style={{ width: "100%", height: "100%" }}
          width="1898"
        />
      </div>
    );
  }
}

class Dot {
  constructor(opts, color) {
    this.opts = opts;
    this.pos = new Vector2(
      Math.random() * window.innerWidth,
      Math.random() * window.innerHeight
    );
    this.vel = new Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1);
    this.color = color;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    if (this.pos.y > window.innerHeight) {
      this.pos.y = 0;
    }
    if (this.pos.x > window.innerWidth) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = window.innerWidth;
    }
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.opts.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.lineWidth = this.opts.thickness;
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default Animation;

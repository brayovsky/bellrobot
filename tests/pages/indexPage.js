import { Selector, t } from 'testcafe';

class IndexPage {
  get upButton() {
    return Selector("button[data-control-direction='north']");
  }
  get downButton() {
    return Selector("button[data-control-direction='south']");
  }
  get rightButton() {
    return Selector("button[data-control-direction='east']");
  }
  get leftButton() {
    return Selector("button[data-control-direction='west']");
  }

  get robot() {
    return Selector("#robot");
  }

  async goUp(steps) {
    await this._clickButton(this.upButton, steps);
  }

  async goDown(steps) {
    await this._clickButton(this.downButton, steps);
  }

  async goRight(steps) {
    await this._clickButton(this.rightButton, steps);
  }

  async goLeft(steps) {
    await this._clickButton(this.leftButton, steps);
  }

  async _clickButton(button, times) {
    const clicks = [];
    while(times) {
      clicks.push(new Promise((resolve, reject) => {
        resolve(t.click(button));
      }));
      times--;
    }
    await Promise.all(clicks);
  }
}

export default new IndexPage();

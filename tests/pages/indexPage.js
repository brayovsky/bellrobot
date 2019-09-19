import { Selector, t } from 'testcafe';

class IndexPage {
  get upButton() {
    return Selector("button[data-control-direction='north']");
  }

  async goUp() {
    await t.click(this.upButton)
  }
}

export default new IndexPage();

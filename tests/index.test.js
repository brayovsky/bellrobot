import IndexPage from './pages/indexPage';

fixture `Index` .page('../index.html')

test('Movement along y-axis', async t => {
  await IndexPage.goDown(1);
  await t.expect(IndexPage.robot.getStyleProperty('top')).eql('100px');
  await IndexPage.goUp(1);
  await t.expect(IndexPage.robot.getStyleProperty('top')).eql('0px');
});

test('Movement along x-axis', async t => {
  await IndexPage.goRight(1);
  await t.expect(IndexPage.robot.getStyleProperty('left')).eql('100px');
  await IndexPage.goLeft(1);
  await t.expect(IndexPage.robot.getStyleProperty('left')).eql('0px');
});

test('Robot does not move outside grid', async t => {
  await IndexPage.goLeft(1);
  await t.expect(IndexPage.robot.getStyleProperty('left')).eql('0px');
  await IndexPage.goUp(1);
  await t.expect(IndexPage.robot.getStyleProperty('top')).eql('0px');
  await IndexPage.goRight(10);
  await t.expect(IndexPage.robot.getStyleProperty('left')).eql('400px');
  await IndexPage.goDown(10);
  await t.expect(IndexPage.robot.getStyleProperty('top')).eql('400px');  
});

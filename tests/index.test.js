import IndexPage from './pages/indexPage';

fixture `Index` .page('../index.html')

test('Robot goes up', async t => {
  await IndexPage.goUp();
});

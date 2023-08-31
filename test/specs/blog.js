import BlogPage from "../pages/blog-page";
import AllureReporter from "@wdio/allure-reporter";

describe('BLOG PAGE', () => {
  
  it('should get the list of all Recent Posts and assert the text length > 25', async() => {
    AllureReporter.addFeature('Recent Post');
    
    AllureReporter.addSeverity('critical');

    await BlogPage.open();
     
    const recentPostsEl = await BlogPage.recentPostsList;

    const recentPosts = [];

    for (let post of recentPostsEl) {
      const postText = await post.getText();
      await expect (postText.length).toBeGreaterThanOrEqual(13);
        recentPosts.push(postText);
    }
    console.log(recentPosts);

    await expect(recentPosts).toHaveLength(5);
    // await expect (recentPostsList).toHaveLength(5)   we can check directly without saving the result into the array

})








})
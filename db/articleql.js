var ArticleSQL = {
  insert: 'INSERT INTO articles(title,author,content,date) VALUES(?,?,?,?)',
  queryAll: 'SELECT * FROM articles',
  getArticleTitle: 'SELECT * FROM articles WHERE title=?'
}
module.exports = ArticleSQL
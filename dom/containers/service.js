/*!
 *
 * 服务URL
 * 基于豆瓣Open API的图书、音乐、电影服务
 * 如果https://api.douban.com/v2/都保持不变，则可以将其设置为BaseURL
 */
module.exports = {
  //图书搜索
  book_search: 'https://api.douban.com/v2/book/search',
  //图书详情
  book_search_id: 'https://api.douban.com/v2/book/',
  //音乐搜索
  music_search: 'https://api.douban.com/v2/music/search',
  //音乐详情
  music_search_id: 'https://api.douban.com/v2/music/',
  //电影搜索
  movie_search: 'https://api.douban.com/v2/movie/search',
  //电影详情
  movie_search_id: 'https://api.douban.com/v2/movie/subject/',
  //网易财经新闻列表,0-10中,0为页数,10为一页显示个数
  //http://c.m.163.com/nc/article/list/T1348648756099/0-10.html
  news:'http://c.m.163.com/nc/article/list/T1348648756099/'
};

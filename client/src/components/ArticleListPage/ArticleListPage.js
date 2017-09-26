import React from 'react';
import PropTypes from 'prop-types';

import PageIntro from '../PageIntro';
import ArticleList from '../ArticleList';
import ErrorPage from '../ErrorPage';

import './ArticleListPage.css';

class ArticleListPage extends React.Component {

  componentDidMount() {
    this.props.fetchPage(this.props.id);
    this.props.fetchArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.props.fetchPage(nextProps.id);
      this.props.fetchArticles(nextProps.id);
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.page && (nextProps.page.title || nextProps.page.error) ? true : false;
  }

  render() {
    const { id, page, articleList, loading, missing, error, } = this.props;

    if (error) {
      return (
        <ErrorPage title='Error loading page' />
      );
    } else if (missing) {
      return (
        <ErrorPage title='Page Not Found' />
      );
    } else if (loading || !page.title) {
      return (
        <div className='article-list-page'>
          <PageIntro icon='fa-spinner fa-spin' title='Loading…' />
        </div>
      );
    } else {
      return (
        <div className={`article-list-page article-list-page--${id}`}>
          <PageIntro title={page.title} text={page.introText} link={page.introLink} image={page.introImage}/>
          <ArticleList articles={articleList.data} error={articleList.meta.error} loading={articleList.meta.loading} />
        </div>
      );
    }
  }
}

ArticleListPage.propTypes = {
  id: PropTypes.string.isRequired,
  page: PropTypes.object,
  articleList: PropTypes.object,
  loading: PropTypes.bool,
  missing: PropTypes.bool,
  error: PropTypes.object,
};

export default ArticleListPage;

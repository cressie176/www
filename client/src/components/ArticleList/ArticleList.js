import React from 'react';
import PropTypes from 'prop-types';

import ArticleSummary from '../ArticleSummary';

import './ArticleList.css';

const ArticleList = ({ articles, loading, error, }) => (
  <div className='article-list'>
    {
      (() => {
        if (error) {
          return (
            <div className='row'>
              <div className='col-md-offset-1 col-md-8'>
                <div className='article-list__error'>
                  <i className='fa fa-exclamation-triangle article-list__error__icon' aria-hidden='true'></i>
                  <span className='article-list__error__text'>Error loading articles</span>
                </div>
              </div>
            </div>
          );
        } else if (loading) {
          return (
            <div className='row'>
              <div className='col-md-offset-1 col-md-8'>
                <div className='article-list__loading'>
                  <span className='article-list__loading__text'>Loading articles…</span>
                  <i className='fa fa-spinner fa-spin article-list__loading__icon' aria-hidden='true'></i>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            articles.map(article => {
              return <ArticleSummary key={article.id} {...article} />;
            })
          );
        }
      })()
    }
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
};


export default ArticleList;

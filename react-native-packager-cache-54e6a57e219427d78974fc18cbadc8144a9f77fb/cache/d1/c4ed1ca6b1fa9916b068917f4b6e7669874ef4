'use strict';

function defaultGetPageData(dataBlob, pageID) {
  return dataBlob[pageID];
}

var ViewPagerDataSource = function () {
  function ViewPagerDataSource(params) {
    babelHelpers.classCallCheck(this, ViewPagerDataSource);

    this._getPageData = params.getPageData || defaultGetPageData;
    this._pageHasChanged = params.pageHasChanged;

    this.pageIdentities = [];
  }

  babelHelpers.createClass(ViewPagerDataSource, [{
    key: 'cloneWithPages',
    value: function cloneWithPages(dataBlob, pageIdentities) {

      var newSource = new ViewPagerDataSource({
        getPageData: this._getPageData,
        pageHasChanged: this._pageHasChanged
      });

      newSource._dataBlob = dataBlob;

      if (pageIdentities) {
        newSource.pageIdentities = pageIdentities;
      } else {
        newSource.pageIdentities = Object.keys(dataBlob);
      }

      newSource._cachedPageCount = newSource.pageIdentities.length;
      newSource._calculateDirtyPages(this._dataBlob, this.pageIdentities);
      return newSource;
    }
  }, {
    key: 'getPageCount',
    value: function getPageCount() {
      return this._cachedPageCount;
    }
  }, {
    key: 'pageShouldUpdate',
    value: function pageShouldUpdate(pageIndex) {
      var needsUpdate = this._dirtyPages[pageIndex];

      return needsUpdate;
    }
  }, {
    key: 'getPageData',
    value: function getPageData(pageIndex) {
      if (!this.getPageData) {
        return null;
      }
      var pageID = this.pageIdentities[pageIndex];

      return this._getPageData(this._dataBlob, pageID);
    }
  }, {
    key: '_calculateDirtyPages',
    value: function _calculateDirtyPages(prevDataBlob, prevPageIDs) {
      var prevPagesHash = keyedDictionaryFromArray(prevPageIDs);
      this._dirtyPages = [];

      var dirty;
      for (var sIndex = 0; sIndex < this.pageIdentities.length; sIndex++) {
        var pageID = this.pageIdentities[sIndex];
        dirty = !prevPagesHash[pageID];
        var pageHasChanged = this._pageHasChanged;
        if (!dirty && pageHasChanged) {
          dirty = pageHasChanged(this._getPageData(prevDataBlob, pageID), this._getPageData(this._dataBlob, pageID));
        }
        this._dirtyPages.push(!!dirty);
      }
    }
  }]);
  return ViewPagerDataSource;
}();

function keyedDictionaryFromArray(arr) {
  if (arr.length === 0) {
    return {};
  }
  var result = {};
  for (var ii = 0; ii < arr.length; ii++) {
    var key = arr[ii];

    result[key] = true;
  }
  return result;
}

module.exports = ViewPagerDataSource;
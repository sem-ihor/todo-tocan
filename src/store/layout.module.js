const state = {
  loader: false,
  drawer: true,
  fixed: false,
  rightDrawer: false,
  right: true,
  windowSize: {
    x: 0,
    y: 0
  }
};

const getters = {
  drawer: state => state.drawer,
  fixed: state => state.fixed,
  rightDrawer: state => state.rightDrawer,
  right: state => state.right,
  windowSize: state => state.windowSize
};

const actions = {
  changeLayoutType({ commit }, { layoutType }) {
    commit("changeLayout", layoutType);
  },

  changeLayoutWidth({ commit }, { layoutWidth }) {
    commit("changeLayoutWidth", layoutWidth);
  },

  changeLeftSidebarType({ commit }, { leftSidebarType }) {
    commit("changeLeftSidebarType", leftSidebarType);
  },

  changeLeftSidebarSize({ commit }, { leftSidebarSize }) {
    commit("changeLeftSidebarSize", leftSidebarSize);
  },

  changeTopbar({ commit }, { topbar }) {
    commit("changeTopbar", topbar);
  },

  changeLoaderValue({ commit }, { loader }) {
    commit("loader", loader);
  },

  changeMenuPosition({ commit }, { menuPosition }) {
    commit("changeMenuPosition", menuPosition);
  }
};

const mutations = {
  changeLayout(state, layoutType) {
    state.layoutType = layoutType;
  },
  changeLayoutWidth(state, layoutWidth) {
    state.layoutWidth = layoutWidth;
  },
  changeLeftSidebarType(state, leftSidebarType) {
    state.leftSidebarType = leftSidebarType;
  },
  changeLeftSidebarSize(state, leftSidebarSize) {
    state.leftSidebarSize = leftSidebarSize;
  },
  changeTopbar(state, topbar) {
    state.topbar = topbar;
  },
  loader(state, loader) {
    state.loader = loader;
  },
  changeMenuPosition(state, menuPosition) {
    state.menuPosition = menuPosition;
  },
  changeDrawer(state) {
    state.drawer = !state.drawer;
  },
  changePositionFooter(state) {
    state.fixed = !state.fixed;
  },
  changeRightDrawer(state) {
    state.rightDrawer = !state.rightDrawer;
  },
  changePositionDrawer(state) {
    state.right = !state.right;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

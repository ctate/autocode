autocode.state['overview'] = function() {
  autocode.action.toggleColumn('overview-content', 1);
  if (!$('#overview-content').find('.subcontent.selected').length || $('#overview-content').find('.subcontent.selected').index() == 1) {
    autocode.state['overview/general']();
  } else {
    autocode.action.toggleSection('overview');
  }
};
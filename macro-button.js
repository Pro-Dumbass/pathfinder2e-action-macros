Hooks.on('renderActorSheet', function(obj, html){

  // Only inject the link if the actor is of type "character" and the user has permission to update it
  const actor = obj.actor;
  // if (!(actor.data.type === "character" && actor.can(game.user, "update"))) return;

  let element = html.find(".window-header .window-title");
  if (element.length != 1) return;

  let button = $(`<a class="popout" style><i class="fas fa-book"></i>Action import dialogue</a>`);
  button.on('click', () => actionMacroExecute);
  element.after(button);
  }
   
);

function actionMacroExecute(targetActor){
  bJM8RV1Ehis6zP7G.execute(actor)
}
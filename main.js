var gameData = {
    trash: 0,
    trashPerClick: 1,
    trashPerClickCost: 10,
    update = 0
  }

  function gatherTrash() {
      gameData.trash += gameData.trashPerClick
      document.getElementById("trashCollected").innerHTML = gameData.trash + " Trash Collected"
  }

  function buyTrashPerClick() {
    if (gameData.trash >= gameData.trashPerClickCost) {
      gameData.trash -= gameData.trashPerClickCost
      gameData.trashPerClick += 1
      gameData.trashPerClickCost *= 2
      document.getElementById("trashCollected").innerHTML = gameData.trash + " Trash Collected"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.trashPerClick + ") Cost: " + gameData.trashPerClickCost + " Gold"
    }
  }

  var mainGameLoop = window.setInterval(function() {
    mineGold()
  }, 1000)

  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("trashCollecterSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("trashCollectedSave"))
if (savegame !== null) {
  gameData = savegame
}
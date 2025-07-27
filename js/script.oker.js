
SpixiAppSdk.onInit = function(sessionId, userAddresses) {
    document.getElementById("log").innerText = "Session started with: " + userAddresses.join(", ");
    SpixiAppSdk.sendNetworkData("Joined the poker table!");
};

SpixiAppSdk.onNetworkData = function(sender, data) {
    document.getElementById("log").innerText += "\n" + sender + ": " + data;
};

function declareWinner(winnerAddress) {
    const message = "I won the Spixi Poker game. Please send my prize!";
    SpixiAppSdk.spixiAction("chat:" + winnerAddress + "|" + message);
}

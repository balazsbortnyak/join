async function sendContact(ev) {
    ev.preventDefault();

    const senderEmail = document.getElementById('emailInput').value;
    const senderDiscord = document.getElementById('dcInput').value;
    const senderKor = document.getElementById('korInput').value;
    const senderVolte = document.getElementById('voltInput').value;
    const senderFogl = document.getElementById('foglInput').value;

    const webhookBody = {
        embeds: [{
            title: 'Új Jelentkezés Érkezett',
            fields: [
                { name: 'E-mail címe', value: senderEmail },
                { name: 'Discord címe', value: senderDiscord },
                { name: 'Életkora', value: senderKor },
                { name: 'Negatívumok', value: senderVolte },
                { name: 'Miért.', value: senderFogl },
            ]
        }],
    };

    
    const webhookUrl = 'https://discord.com/api/webhooks/1108077542201643158/j0yzKYP8Z0rR3RteTXxJqaOmhNWR_sLNjF7DxDvPIdTXZNoCUn_BuBASoKLkJoE35ahY';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        window.location.replace('responses/vettuk.html',"_self")
    } else {
        alert('Hiba történt, kérjük vedd fel a kapcsolatot a csapattal!')
    }
}

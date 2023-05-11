$.ajax ({
    url: 'https://api.github.com/repos/YmeMir/MyFirstRepo',
    success: function(response) {
        console.log(response);
    }
})
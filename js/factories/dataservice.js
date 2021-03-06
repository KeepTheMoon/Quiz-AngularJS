(function(){

    angular
        .module("tweetsQuiz")
        .factory("DataService", DataService);

    function DataService(){

        var dataObj = {
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        return dataObj;
    }

    var correctAnswers = function($resource){
	return $resource('URL', { },
		{
			query: {method:'GET', isArray:true, headers: { 'theme': '?' }},
		});
};

    var quizQuestions = function($resource){
	return $resource('URL', { },
		{
			query: {method:'GET', isArray:true, headers: { 'theme': '?' }},
		});
};

})();

var Quiz = Quiz || {};

Quiz.questions = {
    memory: {
        current: 0,
        answers: {}
    },
    init: function () {
        Quiz.questions.hideQuestions('.questions__item', Quiz.questions.memory.current);
        Quiz.questions.bindUIActions();
    },
    hideQuestions: function (items, current) {
        var elements = document.querySelector('#questions'),
        children = document.querySelectorAll(items);

        for (var i = 0, len = children.length; i < len; i++) {

            children[i].classList.add('is-hidden');
        }



        children[current].classList.remove('is-hidden');
    },
    bindUIActions: function () {
        var elements = document.querySelector('#questions'),
            labels = document.querySelectorAll('.questions__label'),
            that = this;

        for (var i = 0, labelLen = labels.length; i < labelLen; i++) {
            var elem = labels[i];

            that.addEvent(elem, "click");

        }
    },
    moveToNextQuestion: function () {

        var idx = Quiz.questions.memory.current = Quiz.questions.memory.current + 1,
            that = this;

        if (idx > 2) idx = Quiz.questions.memory.current = 0;



        that.hideQuestions('.questions__item', idx);
    },
    recordAnswers: function (key, val) {

        var jsonDiv = document.getElementById("jsonHtml");
        Quiz.questions.memory.answers[key] = val;
        jsonDiv.innerHTML = JSON.stringify(Quiz.questions.memory.answers);

    },
    addEvent: function (item, evt) {
        if (!item) return false;
        var elem = item,
            event = !evt ? "click" : evt,
            that = this;

        elem.addEventListener(evt, function (e) {
            if (e.target !== e.currentTarget) {
                var clickedItem = e.target.id,
                    clickedItemVal = e.target.value,
                    parent = e.target.parentNode,
                    parentDataId = parent.getAttribute("data-id");

                that.moveToNextQuestion();
                that.recordAnswers(parentDataId, clickedItemVal);
            }
            e.stopPropagation();
            return false;
        }, false);


    }


}

Quiz.questions.init();
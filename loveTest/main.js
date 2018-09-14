$(document).ready(function () {
    var currentQuiz = null;

    $("#startButton").click(function () {
        {
            if (currentQuiz == null) {
                currentQuiz = 0;
                //讀取第一個問題
                $("#question").text(questions[0].question);
                //清空選項區域
                $("#options").empty();
                //讀取第一題選項區域
                for (var x = 0; x < questions[0].answers.length; x++) {
                    $("#options").append("<input name='options' type='radio' value=" + x + ">" + "<label>" + questions[0].answers[x][0] + "</label><br><br>");
                    
                    $("#startButton").attr("value", "Next");
                }
            } else {
                //檢查是否每個題目選項被選取
                $.each($(":radio"), function (i, val) {
                    if (val.checked) {
                        //使用者所選取的項目是否產生最終結果
                        if (isNaN(questions[currentQuiz].answers[i][1])) {
                            //顯示最終結果
                            var finalResult = questions[currentQuiz].answers[i][1];
                            //顯示最終結果標題
                            $("#question").text(finalAnswers[finalResult][0]);
                            //將選項區域清空
                            $("#options").empty();
                            //顯示最終詳細內容
                            $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                            //將目前作答幾題的變數清空
                            currentQuiz=null;
                            //修改按鈕為重新開始
                            $("#startButton").attr("value","重新開始")
                            
                        } else {
                            //指定下一個要顯示的題目,原始資料是從1開始算,所以-1
                            currentQuiz=questions[currentQuiz].answers[i][1]-1;
                            //顯示下一題題目
                            $("#question").text(questions[currentQuiz].question);
                            //清空選項區域
                            $("#options").empty();
                            //產生下一題的選項內容
                            for(var x=0;x<questions[currentQuiz].answers.length;x++)
                                {
                                    $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>")
                                }
                        }
                        return false;
                    }
                })
            }
        }
    });
});

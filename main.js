/*   マイルストーン１   */
// alertで'You got 5 guesses. Guess 1 to 5'と言うメッセージを表示させ、１から５までの数値を当てるよう指示する。
alert('You got 5 guesses. Guess 1 to 5');
// 答えの数値を2で用意
let answer = 2;
// promptで'What do you guess?'と言うメッセージとともに、記入欄を表示させる
prompt('What do you guess?');
// forループで１から５までの数値で、答えの2が当たるまで推測を促すpromptを表示させる。
// ヒント１：if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。
// ヒント２：外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。
let array = [1,2,3,4,5];

for (let item of array) {
    if (item === answer){
        alert('Good job! See what happens next')
        break;
    }else if (item !== answer){
        prompt('Ops! Maybe, another try?')
    }
    console.log(i);
}
/*   マイルストーン2   */
// for文で完成したら、for文箇所をコメントアウトし、while文で書き換えてみましょう。

//ページロード時の変数の宣言
const FormArea = document.getElementById('form-area');
const Button = document.getElementById('button');
const Modal = document.getElementById('modal-area');
const M_SendBtn = document.getElementById('send');
const M_NameArea = document.getElementById('name-area');
const ModalClose = document.getElementById('modal-close');
//エラーメッセージ作成
const p = document.createElement('p');
p.id = 'error';
const errorMsg_null = document.createTextNode('文字を入力してください。');
const errorMsg_tCount = document.createTextNode('10字以内で入力してください。');

//確認ボタンを押下した時の処理
Button.addEventListener('click', function(){

    var Name = document.getElementById('name').value;
    var tCount = Name.length;

    //既にエラーメッセージあれば削除
    p.remove();
    errorMsg_null.remove();
    errorMsg_tCount.remove();

    //モーダルウィンドウ開閉・未入力時の処理
    if ( tCount > 10 ) {
        const Error = FormArea.appendChild(p).appendChild(errorMsg_tCount);
    } else if( Name != "" ) {
        Modal.style.display = 'block';
        M_NameArea.innerText = Name;
    } else {
        const Error = FormArea.appendChild(p).appendChild(errorMsg_null);
    }
    
});
//送信ボタンを押下した時の処理
M_SendBtn.addEventListener('click', function(){

});
//閉じるボタンを押下した時の処理
ModalClose.addEventListener('click', function(){

    Modal.style.display = 'none';

});
import Swal from 'sweetalert2'
import axios from 'axios'

/* JS */
import dsft from './Secreat';

function isCheck(elements) {
    if (elements.checked) {
        return "✅"
    } else {
        return "❌"
    }
}

function sendWebhook() {
    const Name = document.getElementById("Name");
    const Number = document.getElementById("Number");
    const DecsPlace = document.getElementById("DecsPlace");
    const CallBack = document.getElementById("CallBack");

    const ToppingChoco = document.getElementById("CheckChoco");
    const ToppingRain = document.getElementById("CheckRain");
    const ToppingJelly = document.getElementById("CheckJelly");
    const ToppingMash = document.getElementById("CheckMash");
    const ToppingWChoco = document.getElementById("CheckWChoco");


    var key = dsft("1181506005461389323/-BesYBELUQUNsv_J8V7KM4hYv0_OvoOhnjKss0kzrB0pOxK5PEOMHAVYL-6TEtqub4Yb")
    const webhookUrl = `https://discord.com/api/webhooks/${key}`;

    const Warnal = document.getElementById("warninfo");
    if (Name.value == "" || Number.value == "" || DecsPlace.value == "" || CallBack.value == "") {
        Warnal.style.display = "block";
    } else {
        Warnal.style.display = "none";
        const payload = {
            "content": "<@1181506220339773510>",
            "embeds": [
                {
                    "title": "➕ Meao แพนเค้ก - คำสั่งชื้อ",
                    "description": `โรงเรียน หาดใหญ่วิทยาลัย - ${DecsPlace.value}`,
                    "color": 16631457,
                    "fields": [
                        {
                            "name": "ชื่อผู้สั่งชื่อ",
                            "value": `${Name.value}`,
                            "inline": true
                        },
                        {
                            "name": "สินค้า / จำนวน",
                            "value": `${Number.value}`,
                            "inline": true
                        },
                        {
                            "name": "ท็อปปิ้ง",
                            "value": `ซ็อกโกแลตชิพ : ${isCheck(ToppingChoco)}\nไวท์ซ็อกโกแลตชิพ : ${isCheck(ToppingWChoco)}\nเรนโบว์ (แบบยาว) : ${isCheck(ToppingRain)}\nเยลลี้ เชอรี่ : ${isCheck(ToppingJelly)}\nมาร์ชเมลโล : ${isCheck(ToppingMash)}`,
                            "inline": true
                        },
                        {
                            "name": "ช่องทางติดต่อกลับ",
                            "value": `${CallBack.value}`,
                        }
                    ]
                }
            ],
        };

        Swal.fire({
            icon: 'question',
            title: '<thai>ต้องการส่งคำสั่งชื้อจริงๆใช่ไหม ?</thai>',
            html: "<e class='Itimfont'>ถ้ากดส่งแล้วจะแก้คำสั่งชื้อไม่ได้นะ !</e>",
            color: "#160E09",
            background: "#fdc6a1",
            showDenyButton: true,
            confirmButtonText: "<e class='Itimfont Firecolor'>ส่งเลย</e>",
            denyButtonText: `<e class='Itimfont Firecolor'>คิดดูก่อน</e>`,
            confirmButtonColor: '#eda779',
            denyButtonColor: '#d49881',
            preConfirm: async (Send) => {
                Swal.fire({
                    icon: 'warning',
                    title: '<thai>กำลังส่งคำสั่งชื้อ ...</thai>',
                    html: "<e class='Itimfont'>กรุณารอสักครู่</e>",
                    color: "#160E09",
                    background: "#fdc6a1",
                    showConfirmButton: false,
                })

                axios.post(webhookUrl, payload)
                    .then(response => {
                        Swal.fire({
                            icon: 'success',
                            title: '<thai>คำสั่งชื้อถูกส่งแล้ว !</thai>',
                            html: `<e class='Itimfont'>กรุณารอการตอบกลับทาง ช่องทางติดต่อที่ให้ไว้ (${CallBack.value})</e>`,
                            color: "#160E09",
                            background: "#fdc6a1",
                            showConfirmButton: false,
                        })

                        Name.value = ""
                        Number.value = ""
                        DecsPlace.value = ""
                        CallBack.value = ""

                        ToppingChoco.checked = false
                        ToppingJelly.checked = false
                        ToppingMash.checked = false
                        ToppingRain.checked = false
                        ToppingWChoco.checked = false
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: '<thai>ไม่สามารถส่งคำสั่งชื้อได้ :(</thai>',
                            html: `<e class='Itimfont'>${error}</e>`,
                            color: "#160E09",
                            background: "#fdc6a1",
                            showConfirmButton: false,
                        })
                    });
            },
        })
    }

}

export default sendWebhook;
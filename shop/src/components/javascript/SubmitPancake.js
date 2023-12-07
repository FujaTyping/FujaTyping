import Swal from 'sweetalert2'
import axios from 'axios'

/* JS */
import dsft from './Secreat';

function sendWebhook() {
    const Name = document.getElementById("Name");
    const Number = document.getElementById("Number");
    const DecsPlace = document.getElementById("DecsPlace");
    const CallBack = document.getElementById("CallBack");

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
                            "name": "ช่องทางติดต่อกลับ",
                            "value": `${CallBack.value}`,
                        }
                    ]
                }
            ],
        };

        Swal.fire({
            icon: 'question',
            title: 'ต้องการส่งคำสั่งชื้อจริงๆใช่ไหม ?',
            text: "ถ้ากดส่งแล้วจะแก้คำสั่งชื้อไม่ได้นะ !",
            showDenyButton: true,
            confirmButtonText: "ส่งเลย",
            denyButtonText: `คิดดูก่อน`,
            preConfirm: async (Send) => {
                Swal.fire({
                    icon: 'warning',
                    title: 'กำลังส่งคำสั่งชื้อ ...',
                    text: `กรุณารอสักครู่`,
                    showConfirmButton: false,
                })

                axios.post(webhookUrl, payload)
                    .then(response => {
                        Swal.fire({
                            icon: 'success',
                            title: 'คำสั่งชื้อถูกส่งแล้ว !',
                            text: `กรุณารอการตอบกลับทาง ช่องทางติดต่อที่ให้ไว้ (${CallBack.value})`,
                            showConfirmButton: false,
                        })

                        Name.value = ""
                        Number.value = ""
                        DecsPlace.value = ""
                        CallBack.value = ""
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'ไม่สามารถส่งคำสั่งชื้อได้ :(',
                            text: `${error}`,
                            showConfirmButton: false,
                        })
                    });
            },
        })
    }

}

export default sendWebhook;
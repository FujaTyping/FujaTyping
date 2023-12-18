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

function isMessage(elements) {
    if (elements.value == "") {
        return "-"
    } else {
        return elements.value
    }
}

let noCon = 0
const defaultOrder = "แพนเค้ก"
const PricePan = 25
const PriceDog = 30
let Stepstate = 0

function CheckNext() {
    const Name = document.getElementById("Name");
    const Number = document.getElementById("Number");
    const Warnal = document.getElementById("warninfo");
    const RadioP = document.getElementById('RPan');
    const RadioD = document.getElementById('RDog');

    const NextF = document.getElementById('NextFirst');
    const NextSe = document.getElementById('NextSec');
    const NextBT = document.getElementById('NextBT');
    const NextGSub = document.getElementById('GSubmit');
    const OClick = document.getElementById('OneClick');
    const SpacialP = document.getElementById('SpacialPong');

    if (Stepstate == 0) {
        if (Name.value == "" || Number.value == "") {
            Warnal.style.display = "block";
        } else {
            if (RadioD.checked || RadioP.checked) {
                Warnal.style.display = "none";
                NextF.style.display = 'none';
                NextSe.style.display = 'block';
                NextBT.style.display = 'none';
                NextGSub.style.display = 'flex';
                OClick.style.display = 'block';

                if (RadioD.checked) {
                    SpacialP.style.display = 'inline-flex';
                } else {
                    SpacialP.style.display = 'none';
                }
            } else {
                Warnal.style.display = "block";
            }
        }
    }
}

async function ConfirmWebhook() {
    const Name = document.getElementById("Name");
    const Number = document.getElementById("Number");
    const DecsPlace = document.getElementById("DecsPlace");
    const CallBack = document.getElementById("CallBack");

    const Warnal = document.getElementById("warninfo");
    const Bypass = document.getElementById("CheckbyPass");
    if (Name.value == "" || Number.value == "" || DecsPlace.value == "" || CallBack.value == "") {
        Warnal.style.display = "block";
        noCon = 0
    } else {
        if (Bypass.checked) {
            await sendBypass()
            Bypass.checked = false
        } else {
            document.getElementById('SubmitConfirm').showModal()
            Warnal.style.display = "none";
            noCon = 1
        }
    }
}

function sendBypass() {
    const Name = document.getElementById("Name");
    const Number = document.getElementById("Number");
    const DecsPlace = document.getElementById("DecsPlace");
    const CallBack = document.getElementById("CallBack");
    const MoreDecs = document.getElementById("MoreDecs");

    const RadioP = document.getElementById('RPan');
    const RadioD = document.getElementById('RDog');

    const ToppingChoco = document.getElementById("CheckChoco");
    const ToppingRain = document.getElementById("CheckRain");
    const ToppingJelly = document.getElementById("CheckJelly");
    const ToppingMash = document.getElementById("CheckMash");
    const ToppingWChoco = document.getElementById("CheckWChoco");
    const ToppingBJelly = document.getElementById("CheckBlueJelly");

    const NextF = document.getElementById('NextFirst');
    const NextSe = document.getElementById('NextSec');
    const NextBT = document.getElementById('NextBT');
    const NextGSub = document.getElementById('GSubmit');
    const OClick = document.getElementById('OneClick');
    const SpacialP = document.getElementById('SpacialPong');

    const PowNWant = document.getElementById('PowNWant');
    const PowChoco = document.getElementById('PowChoco');
    const PowPeaK = document.getElementById('PowPeaK');
    const PowMilk = document.getElementById('PowMilk');
    const PowIcce = document.getElementById('PowIce');
    const PowStraw = document.getElementById('PowStraw');

    const Warnal = document.getElementById("warninfo");
    Warnal.style.display = 'none';

    var key = dsft("1181506005461389323/-BesYBELUQUNsv_J8V7KM4hYv0_OvoOhnjKss0kzrB0pOxK5PEOMHAVYL-6TEtqub4Yb")
    const webhookUrl = `https://discord.com/api/webhooks/${key}`;

    const payload = {
        "content": "<@1181506220339773510>",
        "embeds": [
            {
                "title": "➕ Meao แพนเค้ก - คำสั่งชื้อ",
                "description": `ชื่อผู้สั่งซื้อ : **${Name.value}**\nโรงเรียน หาดใหญ่วิทยาลัย - **${DecsPlace.value}**\nคำอธิบาย : **${isMessage(MoreDecs)}**`,
                "color": 16631457,
                "fields": [
                    {
                        "name": "สินค้า / จำนวน",
                        "value": `แพนเค้ก : ${isCheck(RadioP)}\nโดนัท : ${isCheck(RadioD)}\nจำนวน : ${Number.value}`,
                        "inline": true
                    },
                    {
                        "name": "ท็อปปิ้ง",
                        "value": `ซ็อกโกแลตชิพ : ${isCheck(ToppingChoco)}\nไวท์ซ็อกโกแลตชิพ : ${isCheck(ToppingWChoco)}\nเรนโบว์ (แบบยาว) : ${isCheck(ToppingRain)}\nเยลลี้ เชอรี่ : ${isCheck(ToppingJelly)}\nเยลลี้ บลูเบอรี่ : ${isCheck(ToppingBJelly)}\nมาร์ชเมลโล : ${isCheck(ToppingMash)}`,
                        "inline": true
                    },
                    {
                        "name": "ผง",
                        "value": `ไอซ์ซิ้ง : ${isCheck(PowIcce)}\nนมสด : ${isCheck(PowMilk)}\nซ็อกโกแลต : ${isCheck(PowChoco)}\nเผือก : ${isCheck(PowPeaK)}\nสตอรเบอรี่ : ${isCheck(PowStraw)}\nไม่เอา : ${isCheck(PowNWant)}`,
                        "inline": true
                    },
                    {
                        "name": "ช่องทางติดต่อกลับ",
                        "value": `\`${CallBack.value}\``,
                    }
                ]
            }
        ],
    };

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
            NextF.style.display = 'block';
            NextSe.style.display = 'none';
            NextBT.style.display = 'inline-flex';
            NextGSub.style.display = 'none';
            OClick.style.display = 'none';
            SpacialP.style.display = 'none';

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
            MoreDecs.value = ""

            ToppingChoco.checked = false
            ToppingJelly.checked = false
            ToppingMash.checked = false
            ToppingRain.checked = false
            ToppingWChoco.checked = false
            ToppingBJelly.checked = false
            RadioD.checked = false
            RadioP.checked = false
            PowChoco.checked = false
            PowIcce.checked = false
            PowMilk.checked = false
            PowPeaK.checked = false
            PowStraw.checked = false
            PowNWant.checked = true
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
}

function sendWebhook() {
    document.getElementById('SubmitConfirm').close()
    if (noCon == 1) {
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
                await sendBypass()
            },
        })
    }

}

export { CheckNext, ConfirmWebhook, sendWebhook };
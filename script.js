function registerWaiting() {

    const name =
        document.getElementById("name").value;

    const restaurant =
        document.getElementById("restaurant").value;

    // 이름 미입력 시
    if(name === "") {

        alert("이름을 입력해주세요!");

        return;

    }

    // 랜덤 대기 번호
    const myNumber =
        Math.floor(Math.random() * 100) + 100;

    // 현재 번호
    let currentNumber =
        myNumber - 10;

    // 남은 인원
    let remainingPeople =
        myNumber - currentNumber;

    // 예상 시간
    let remainTime =
        remainingPeople * 2;

    // 결과 화면 표시
    document.getElementById("resultCard")
        .classList.remove("hidden");

    // 정보 출력
    document.getElementById("myRestaurant")
        .innerText =
        "🍴 선택 식당 : " + restaurant;

    document.getElementById("myNumber")
        .innerText =
        "🙋 " + name + "님의 대기 번호 : " +
        myNumber + "번";

    document.getElementById("currentNumber")
        .innerText =
        "📢 현재 입장 번호 : " +
        currentNumber + "번";

    document.getElementById("remainTime")
        .innerText =
        "⏳ 예상 남은 시간 : " +
        remainTime + "분";

    // 진행 바
    const progressBar =
        document.getElementById("progressBar");

    progressBar.style.width = "0%";

    let progress = 0;

    // 실시간 느낌 연출
    const interval = setInterval(() => {

        progress += 10;

        progressBar.style.width =
            progress + "%";

        currentNumber++;

        remainingPeople--;

        remainTime =
            remainingPeople * 2;

        document.getElementById("currentNumber")
            .innerText =
            "📢 현재 입장 번호 : " +
            currentNumber + "번";

        document.getElementById("remainTime")
            .innerText =
            "⏳ 예상 남은 시간 : " +
            remainTime + "분";

        // 알림 변경
        if(progress >= 80) {

            document.getElementById("alertBox")
                .innerHTML =
                "🔔 곧 입장 순서입니다! 식당으로 이동해주세요.";

        }

        // 입장 가능
        if(progress >= 100) {

            clearInterval(interval);

            document.getElementById("alertBox")
                .innerHTML =
                "✅ 입장 가능합니다.";

        }

    }, 1000);

}
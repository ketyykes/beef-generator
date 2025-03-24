// 預設的牛肉湯店家資料
let beefSoupStores = [
	{
		storeName: "阿明牛肉湯",
		businessHours: [
			{ day: "週一", time: "06:00-14:00" },
			{ day: "週二", time: "06:00-14:00" },
			{ day: "週三", time: "06:00-14:00" },
			{ day: "週四", time: "06:00-14:00" },
			{ day: "週五", time: "06:00-14:00" },
			{ day: "週六", time: "06:00-14:00" },
			{ day: "週日", time: "06:00-14:00" },
		],
		address: "台南市中西區府前路二段 18 號",
	},
	{
		storeName: "老曾牛肉湯",
		businessHours: [
			{ day: "週一", time: "05:00-13:00" },
			{ day: "週二", time: "05:00-13:00" },
			{ day: "週三", time: "05:00-13:00" },
			{ day: "週四", time: "05:00-13:00" },
			{ day: "週五", time: "05:00-13:00" },
			{ day: "週六", time: "05:00-13:00" },
			{ day: "週日", time: "05:00-13:00" },
		],
		address: "台南市東區府前路一段 173 號",
	},
	{
		storeName: "阿財牛肉湯",
		businessHours: [
			{ day: "週一", time: "05:30-13:30" },
			{ day: "週二", time: "05:30-13:30" },
			{ day: "週三", time: "05:30-13:30" },
			{ day: "週四", time: "05:30-13:30" },
			{ day: "週五", time: "05:30-13:30" },
			{ day: "週六", time: "05:30-13:30" },
			{ day: "週日", time: "05:30-13:30" },
		],
		address: "台南市中西區府前路二段 63 號",
	},
	{
		storeName: "小李牛肉湯",
		businessHours: [
			{ day: "週一", time: "07:00-15:00" },
			{ day: "週二", time: "07:00-15:00" },
			{ day: "週三", time: "07:00-15:00" },
			{ day: "週四", time: "07:00-15:00" },
			{ day: "週五", time: "07:00-15:00" },
			{ day: "週六", time: "07:00-15:00" },
			{ day: "週日", time: "07:00-15:00" },
		],
		address: "台南市南區小東路 45 號",
	},
	{
		storeName: "大明牛肉湯",
		businessHours: [
			{ day: "週一", time: "08:00-16:00" },
			{ day: "週二", time: "08:00-16:00" },
			{ day: "週三", time: "08:00-16:00" },
			{ day: "週四", time: "08:00-16:00" },
			{ day: "週五", time: "08:00-16:00" },
			{ day: "週六", time: "08:00-16:00" },
			{ day: "週日", time: "08:00-16:00" },
		],
		address: "台南市北區中華路 88 號",
	},
	{
		storeName: "牛肉湯之家",
		businessHours: [
			{ day: "週一", time: "09:00-17:00" },
			{ day: "週二", time: "09:00-17:00" },
			{ day: "週三", time: "09:00-17:00" },
			{ day: "週四", time: "09:00-17:00" },
			{ day: "週五", time: "09:00-17:00" },
			{ day: "週六", time: "09:00-17:00" },
			{ day: "週日", time: "09:00-17:00" },
		],
		address: "台南市安平區安平路 12 號",
	},
	{
		storeName: "牛肉湯專賣店",
		businessHours: [
			{ day: "週一", time: "10:00-18:00" },
			{ day: "週二", time: "10:00-18:00" },
			{ day: "週三", time: "10:00-18:00" },
			{ day: "週四", time: "10:00-18:00" },
			{ day: "週五", time: "10:00-18:00" },
			{ day: "週六", time: "10:00-18:00" },
			{ day: "週日", time: "10:00-18:00" },
		],
		address: "台南市東區中華路 99 號",
	},
	{
		storeName: "牛肉湯大王",
		businessHours: [
			{ day: "週一", time: "11:00-19:00" },
			{ day: "週二", time: "11:00-19:00" },
			{ day: "週三", time: "11:00-19:00" },
			{ day: "週四", time: "11:00-19:00" },
			{ day: "週五", time: "11:00-19:00" },
			{ day: "週六", time: "11:00-19:00" },
			{ day: "週日", time: "11:00-19:00" },
		],
		address: "台南市南區建國路 30 號",
	},
	{
		storeName: "牛肉湯小館",
		businessHours: [
			{ day: "週一", time: "12:00-20:00" },
			{ day: "週二", time: "12:00-20:00" },
			{ day: "週三", time: "12:00-20:00" },
			{ day: "週四", time: "12:00-20:00" },
			{ day: "週五", time: "12:00-20:00" },
			{ day: "週六", time: "12:00-20:00" },
			{ day: "週日", time: "12:00-20:00" },
		],
		address: "台南市中西區民族路 55 號",
	},
	{
		storeName: "牛肉湯美食",
		businessHours: [
			{ day: "週一", time: "13:00-21:00" },
			{ day: "週二", time: "13:00-21:00" },
			{ day: "週三", time: "13:00-21:00" },
			{ day: "週四", time: "13:00-21:00" },
			{ day: "週五", time: "13:00-21:00" },
			{ day: "週六", time: "13:00-21:00" },
			{ day: "週日", time: "13:00-21:00" },
		],
		address: "台南市東區中華路 111 號",
	},
];

// DOM 元素
const randomButton = document.getElementById("randomButton");
const storeCountInput = document.getElementById("storeCount");
const resultsContainer = document.getElementById("results");
const jsonFileInput = document.getElementById("jsonFile");
const uploadButton = document.getElementById("uploadButton");

// 隨機選擇店家的函式
function getRandomStores(count) {
	const shuffled = [...beefSoupStores].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}

// 顯示店家資訊的函式
function displayStores(stores) {
	resultsContainer.innerHTML = "";

	stores.forEach((store) => {
		const storeCard = document.createElement("div");
		storeCard.className = "store-card";

		const businessHoursHtml = store.businessHours
			.map((hour) => `<p>${hour.day}: ${hour.time}</p>`)
			.join("");

		storeCard.innerHTML = `
            <h3>${store.storeName}</h3>
            <div class="business-hours">
                ${businessHoursHtml}
            </div>
            <p><strong>地址：</strong>${store.address}</p>
        `;

		resultsContainer.appendChild(storeCard);
	});
}

// 處理隨機選擇按鈕點擊事件
randomButton.addEventListener("click", () => {
	const count = parseInt(storeCountInput.value);
	if (count < 1) {
		alert("請輸入大於 0 的數字！");
		return;
	}
	if (count > beefSoupStores.length) {
		alert(`目前只有 ${beefSoupStores.length} 間店家資料，請輸入較小的數字！`);
		return;
	}

	const selectedStores = getRandomStores(count);
	displayStores(selectedStores);
});

// 處理 JSON 檔案上傳
uploadButton.addEventListener("click", () => {
	const file = jsonFileInput.files[0];
	if (!file) {
		alert("請選擇一個 JSON 檔案！");
		return;
	}

	const reader = new FileReader();
	reader.onload = (e) => {
		try {
			const newStores = JSON.parse(e.target.result);
			if (!Array.isArray(newStores)) {
				throw new Error("上傳的檔案必須是店家陣列！");
			}

			// 驗證資料格式
			newStores.forEach((store) => {
				if (!store.storeName || !store.businessHours || !store.address) {
					throw new Error("店家資料格式不正確！");
				}
			});

			beefSoupStores = [...beefSoupStores, ...newStores];
			alert(`成功新增 ${newStores.length} 間店家資料！`);
			jsonFileInput.value = ""; // 清空檔案輸入
		} catch (error) {
			alert(`上傳失敗：${error.message}`);
		}
	};

	reader.readAsText(file);
});

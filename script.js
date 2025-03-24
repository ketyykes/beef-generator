// 當頁面載入完成後執行
document.addEventListener("DOMContentLoaded", () => {
	// DOM 元素
	const randomButton = document.getElementById("randomButton");
	const storeCountInput = document.getElementById("storeCount");
	const resultsContainer = document.getElementById("results");
	const jsonFileInput = document.getElementById("jsonFile");
	const uploadButton = document.getElementById("uploadButton");

	// 用來存儲從 beefData.json 載入的牛肉湯店家資料
	let beefSoupStores = [];

	// 載入 beefData.json
	fetch("beefData.json")
		.then((response) => response.json())
		.then((data) => {
			beefSoupStores = data;
			console.log(`成功載入 ${beefSoupStores.length} 間店家資料`);
		})
		.catch((error) => {
			console.error("載入 beefData.json 失敗：", error);
			alert("載入店家資料失敗，請重新整理頁面");
		});

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

			storeCard.innerHTML = `
				<h3>${store.name}</h3>
				<p><strong>營業時間：</strong>${store.open_time || "未提供營業時間"}</p>
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
					if (!store.name || !store.address) {
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
});

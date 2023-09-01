document.addEventListener("DOMContentLoaded", function() {
    // 모든 자동 미리보기 링크를 가져와서 처리
    var autoPreviewLinks = document.querySelectorAll(".auto-preview-link");
    autoPreviewLinks.forEach(function(link) {
        var url = link.href;
        
        // 입력된 URL에서 Open Graph 데이터 가져오기
        fetchOpenGraphData(url)
            .then(function(data) {
                // 데이터를 표시하는 함수 호출
                displayOpenGraphData(link, data);
            })
            .catch(function(error) {
                console.error("오류 발생:", error);
            });
    });

    // 입력된 URL에서 Open Graph 데이터 가져오는 함수 (이전 코드와 동일)
    function fetchOpenGraphData(url) {
        // 서버에서 Open Graph 데이터를 가져오는 로직을 작성하세요.
        // 이 예제에서는 외부 서버에서 데이터를 가져오는 대신 JavaScript fetch()를 사용했습니다.
        return fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("네트워크 오류: " + response.statusText);
                }
                return response.text();
            })
            .then(function(html) {
                // HTML에서 Open Graph 메타 데이터를 추출하여 반환
                var openGraphData = extractOpenGraphData(html);
                return openGraphData;
            });
    }

    // HTML에서 Open Graph 메타 데이터를 추출하는 함수 (이전 코드와 동일)
    function extractOpenGraphData(html) {
        // HTML에서 Open Graph 메타 데이터를 추출하는 로직을 작성하세요.
        // 이 예제에서는 간단히 Open Graph 메타 데이터를 파싱하지 않았습니다.
        // 원하는 메타 데이터를 추출하고 객체로 반환해야 합니다.
        return {};
    }

    // Open Graph 데이터를 표시하는 함수 (링크의 아래에 표시)
    function displayOpenGraphData(link, data) {
        var previewElement = document.createElement("div");
        previewElement.classList.add("preview");
        previewElement.textContent = JSON.stringify(data, null, 2);
        
        // 링크 아래에 미리보기 추가
        link.parentNode.insertBefore(previewElement, link.nextSibling);
    }
});

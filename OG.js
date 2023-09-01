import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class OpenGraphPreview {

    public static void main(String[] args) {
        String url = "https://wannafelx.com/176";

        try {
            // 웹 페이지의 HTML 가져오기
            Document doc = Jsoup.connect(url).get();

            // Open Graph 메타 데이터 추출
            Elements metaTags = doc.select("meta[property^=og:]");
            for (Element metaTag : metaTags) {
                String property = metaTag.attr("property");
                String content = metaTag.attr("content");
                System.out.println(property + ": " + content);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}


<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
    <head>
        <title>Spittr</title>
        <link rel="stylesheet"
                type="text/css"
                href="<c:url value="/resources/style.css" />" >
     </head>
     <body>
        <h1>Recent Spittles</h1>

        <c:forEach items="${spittleList}" var="spittle">
            <li id="spittle_<c:out value="spittle.id"/>">
                <div class="spittleMessage">
                    <c:out value="${spittle.message}" />
                </div>
            </li>

        </c:forEach>

     </body>
</html>
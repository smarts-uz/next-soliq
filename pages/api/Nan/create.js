// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
// const data = [
//     {
//         "methodName": "build",
//         "fileName": "ProblemBuilder.java",
//         "lineNumber": 83,
//         "className": "org.zalando.problem.ProblemBuilder",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "process",
//         "fileName": "ExceptionTranslator.java",
//         "lineNumber": 74,
//         "className": "uz.yt.ts.bankexchange.errors.ExceptionTranslator",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "create",
//         "fileName": "AdviceTrait.java",
//         "lineNumber": 129,
//         "className": "org.zalando.problem.spring.web.advice.AdviceTrait",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "create",
//         "fileName": "AdviceTrait.java",
//         "lineNumber": 89,
//         "className": "org.zalando.problem.spring.web.advice.AdviceTrait",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "handleRequestMethodNotSupportedException",
//         "fileName": "MethodNotAllowedAdviceTrait.java",
//         "lineNumber": 40,
//         "className": "org.zalando.problem.spring.web.advice.http.MethodNotAllowedAdviceTrait",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke0",
//         "fileName": "NativeMethodAccessorImpl.java",
//         "lineNumber": -2,
//         "className": "sun.reflect.NativeMethodAccessorImpl",
//         "nativeMethod": true
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "NativeMethodAccessorImpl.java",
//         "lineNumber": 62,
//         "className": "sun.reflect.NativeMethodAccessorImpl",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "DelegatingMethodAccessorImpl.java",
//         "lineNumber": 43,
//         "className": "sun.reflect.DelegatingMethodAccessorImpl",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "Method.java",
//         "lineNumber": 498,
//         "className": "java.lang.reflect.Method",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doInvoke",
//         "fileName": "InvocableHandlerMethod.java",
//         "lineNumber": 190,
//         "className": "org.springframework.web.method.support.InvocableHandlerMethod",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invokeForRequest",
//         "fileName": "InvocableHandlerMethod.java",
//         "lineNumber": 138,
//         "className": "org.springframework.web.method.support.InvocableHandlerMethod",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invokeAndHandle",
//         "fileName": "ServletInvocableHandlerMethod.java",
//         "lineNumber": 106,
//         "className": "org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doResolveHandlerMethodException",
//         "fileName": "ExceptionHandlerExceptionResolver.java",
//         "lineNumber": 407,
//         "className": "org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doResolveException",
//         "fileName": "AbstractHandlerMethodExceptionResolver.java",
//         "lineNumber": 61,
//         "className": "org.springframework.web.servlet.handler.AbstractHandlerMethodExceptionResolver",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "resolveException",
//         "fileName": "AbstractHandlerExceptionResolver.java",
//         "lineNumber": 141,
//         "className": "org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "resolveException",
//         "fileName": "HandlerExceptionResolverComposite.java",
//         "lineNumber": 80,
//         "className": "org.springframework.web.servlet.handler.HandlerExceptionResolverComposite",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "processHandlerException",
//         "fileName": "DispatcherServlet.java",
//         "lineNumber": 1300,
//         "className": "org.springframework.web.servlet.DispatcherServlet",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "processDispatchResult",
//         "fileName": "DispatcherServlet.java",
//         "lineNumber": 1111,
//         "className": "org.springframework.web.servlet.DispatcherServlet",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doDispatch",
//         "fileName": "DispatcherServlet.java",
//         "lineNumber": 1057,
//         "className": "org.springframework.web.servlet.DispatcherServlet",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doService",
//         "fileName": "DispatcherServlet.java",
//         "lineNumber": 943,
//         "className": "org.springframework.web.servlet.DispatcherServlet",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "processRequest",
//         "fileName": "FrameworkServlet.java",
//         "lineNumber": 1006,
//         "className": "org.springframework.web.servlet.FrameworkServlet",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doPost",
//         "fileName": "FrameworkServlet.java",
//         "lineNumber": 909,
//         "className": "org.springframework.web.servlet.FrameworkServlet",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "service",
//         "fileName": "HttpServlet.java",
//         "lineNumber": 660,
//         "className": "javax.servlet.http.HttpServlet",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "service",
//         "fileName": "FrameworkServlet.java",
//         "lineNumber": 883,
//         "className": "org.springframework.web.servlet.FrameworkServlet",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "service",
//         "fileName": "HttpServlet.java",
//         "lineNumber": 741,
//         "className": "javax.servlet.http.HttpServlet",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "internalDoFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 231,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 166,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "WsFilter.java",
//         "lineNumber": 53,
//         "className": "org.apache.tomcat.websocket.server.WsFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "internalDoFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 193,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 166,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 320,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "FilterSecurityInterceptor.java",
//         "lineNumber": 126,
//         "className": "org.springframework.security.web.access.intercept.FilterSecurityInterceptor",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterSecurityInterceptor.java",
//         "lineNumber": 90,
//         "className": "org.springframework.security.web.access.intercept.FilterSecurityInterceptor",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "ExceptionTranslationFilter.java",
//         "lineNumber": 118,
//         "className": "org.springframework.security.web.access.ExceptionTranslationFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "SessionManagementFilter.java",
//         "lineNumber": 137,
//         "className": "org.springframework.security.web.session.SessionManagementFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "AnonymousAuthenticationFilter.java",
//         "lineNumber": 111,
//         "className": "org.springframework.security.web.authentication.AnonymousAuthenticationFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "SecurityContextHolderAwareRequestFilter.java",
//         "lineNumber": 158,
//         "className": "org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "RequestCacheAwareFilter.java",
//         "lineNumber": 63,
//         "className": "org.springframework.security.web.savedrequest.RequestCacheAwareFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilterInternal",
//         "fileName": "BasicAuthenticationFilter.java",
//         "lineNumber": 154,
//         "className": "org.springframework.security.web.authentication.www.BasicAuthenticationFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "OncePerRequestFilter.java",
//         "lineNumber": 119,
//         "className": "org.springframework.web.filter.OncePerRequestFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "LogoutFilter.java",
//         "lineNumber": 116,
//         "className": "org.springframework.security.web.authentication.logout.LogoutFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doHeadersAfter",
//         "fileName": "HeaderWriterFilter.java",
//         "lineNumber": 92,
//         "className": "org.springframework.security.web.header.HeaderWriterFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilterInternal",
//         "fileName": "HeaderWriterFilter.java",
//         "lineNumber": 77,
//         "className": "org.springframework.security.web.header.HeaderWriterFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "OncePerRequestFilter.java",
//         "lineNumber": 119,
//         "className": "org.springframework.web.filter.OncePerRequestFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "SecurityContextPersistenceFilter.java",
//         "lineNumber": 105,
//         "className": "org.springframework.security.web.context.SecurityContextPersistenceFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilterInternal",
//         "fileName": "WebAsyncManagerIntegrationFilter.java",
//         "lineNumber": 56,
//         "className": "org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "OncePerRequestFilter.java",
//         "lineNumber": 119,
//         "className": "org.springframework.web.filter.OncePerRequestFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 334,
//         "className": "org.springframework.security.web.FilterChainProxy$VirtualFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilterInternal",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 215,
//         "className": "org.springframework.security.web.FilterChainProxy",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "FilterChainProxy.java",
//         "lineNumber": 178,
//         "className": "org.springframework.security.web.FilterChainProxy",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invokeDelegate",
//         "fileName": "DelegatingFilterProxy.java",
//         "lineNumber": 358,
//         "className": "org.springframework.web.filter.DelegatingFilterProxy",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "DelegatingFilterProxy.java",
//         "lineNumber": 271,
//         "className": "org.springframework.web.filter.DelegatingFilterProxy",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "internalDoFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 193,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 166,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilterInternal",
//         "fileName": "RequestContextFilter.java",
//         "lineNumber": 100,
//         "className": "org.springframework.web.filter.RequestContextFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "OncePerRequestFilter.java",
//         "lineNumber": 119,
//         "className": "org.springframework.web.filter.OncePerRequestFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "internalDoFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 193,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 166,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilterInternal",
//         "fileName": "FormContentFilter.java",
//         "lineNumber": 93,
//         "className": "org.springframework.web.filter.FormContentFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "OncePerRequestFilter.java",
//         "lineNumber": 119,
//         "className": "org.springframework.web.filter.OncePerRequestFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "internalDoFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 193,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 166,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilterInternal",
//         "fileName": "CharacterEncodingFilter.java",
//         "lineNumber": 201,
//         "className": "org.springframework.web.filter.CharacterEncodingFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "OncePerRequestFilter.java",
//         "lineNumber": 119,
//         "className": "org.springframework.web.filter.OncePerRequestFilter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "internalDoFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 193,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doFilter",
//         "fileName": "ApplicationFilterChain.java",
//         "lineNumber": 166,
//         "className": "org.apache.catalina.core.ApplicationFilterChain",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "StandardWrapperValve.java",
//         "lineNumber": 202,
//         "className": "org.apache.catalina.core.StandardWrapperValve",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "StandardContextValve.java",
//         "lineNumber": 96,
//         "className": "org.apache.catalina.core.StandardContextValve",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "AuthenticatorBase.java",
//         "lineNumber": 526,
//         "className": "org.apache.catalina.authenticator.AuthenticatorBase",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "StandardHostValve.java",
//         "lineNumber": 139,
//         "className": "org.apache.catalina.core.StandardHostValve",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "ErrorReportValve.java",
//         "lineNumber": 92,
//         "className": "org.apache.catalina.valves.ErrorReportValve",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "invoke",
//         "fileName": "StandardEngineValve.java",
//         "lineNumber": 74,
//         "className": "org.apache.catalina.core.StandardEngineValve",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "service",
//         "fileName": "CoyoteAdapter.java",
//         "lineNumber": 343,
//         "className": "org.apache.catalina.connector.CoyoteAdapter",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "service",
//         "fileName": "Http11Processor.java",
//         "lineNumber": 367,
//         "className": "org.apache.coyote.http11.Http11Processor",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "process",
//         "fileName": "AbstractProcessorLight.java",
//         "lineNumber": 65,
//         "className": "org.apache.coyote.AbstractProcessorLight",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "process",
//         "fileName": "AbstractProtocol.java",
//         "lineNumber": 860,
//         "className": "org.apache.coyote.AbstractProtocol$ConnectionHandler",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "doRun",
//         "fileName": "NioEndpoint.java",
//         "lineNumber": 1591,
//         "className": "org.apache.tomcat.util.net.NioEndpoint$SocketProcessor",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "run",
//         "fileName": "SocketProcessorBase.java",
//         "lineNumber": 49,
//         "className": "org.apache.tomcat.util.net.SocketProcessorBase",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "runWorker",
//         "fileName": "ThreadPoolExecutor.java",
//         "lineNumber": 1149,
//         "className": "java.util.concurrent.ThreadPoolExecutor",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "run",
//         "fileName": "ThreadPoolExecutor.java",
//         "lineNumber": 624,
//         "className": "java.util.concurrent.ThreadPoolExecutor$Worker",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "run",
//         "fileName": "TaskThread.java",
//         "lineNumber": 61,
//         "className": "org.apache.tomcat.util.threads.TaskThread$WrappingRunnable",
//         "nativeMethod": false
//     },
//     {
//         "methodName": "run",
//         "fileName": "Thread.java",
//         "lineNumber": 748,
//         "className": "java.lang.Thread",
//         "nativeMethod": false
//     }
// ]
// export default (req, res) => {

//         prisma.nan.createMany({
//             data: data,
//             skipDuplicates: true
//         }).then(ok=>{
//             console.log(ok);
//         }).catch(err=>{
//             console.log(err);
//         })
        
//     res.json({message: "Hammasi joyida"})
//   }
  
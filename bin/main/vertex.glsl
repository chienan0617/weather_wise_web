#ifdef GL_ES
precision mediump float;
#endif

attribute vec3 a_position;
attribute vec3 a_normal;
attribute vec4 a_color;
attribute vec2 a_texCoord0;

uniform mat4 u_worldTrans;
uniform mat4 u_projTrans;

varying vec4 vColor;
varying vec2 vTexCoord;
varying vec3 vNormal;

void main() {
    vColor = a_color;
    vTexCoord = a_texCoord0;

    // 提取旋轉部分
    mat3 rotationMatrix = mat3(u_worldTrans[0].xyz, u_worldTrans[1].xyz, u_worldTrans[2].xyz);
    vNormal = normalize(rotationMatrix * a_normal);

    vec4 worldPos = u_worldTrans * vec4(a_position, 1.0);
    gl_Position = u_projTrans * worldPos;
}
